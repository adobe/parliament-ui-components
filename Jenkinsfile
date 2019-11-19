def do_deploy = false

pipeline {
    agent any

    environment{
        GITHUB_CLONE_URL = 'git@git.corp.adobe.com:devrel/parliament-ui-components.git'
        GITHUB_CLONE_CREDENTIALS = 'smacdona-git.corp'
        GITHUB_CLONE_ORG = 'devrel'
        GITHUB_CLONE_REPO = 'parliament-ui-components'
        GITHUB_CLONE_BRANCH = 'master'
        BRANCH_NAME = 'master'
        EMAIL_ENABLED = false
        EMAIL_RECIPIENTS = 'smacdona@adobe.com'
    }

    stages {
        stage('Clone Sources') {
            steps {
                script {
                    def gitbranch = "${env.GITHUB_CLONE_BRANCH}"
                    if (!env.GITHUB_CLONE_BRANCH) {
                        gitbranch = "${env.GIT_BRANCH}"
                    } else {
                         //to handle issue with origin/BRANCH_NAME
                         def gitbranchOriginSplit = gitbranch.split('origin/')
                         def gitbranchOriginSplitLength = gitbranchOriginSplit.size()
                         gitbranch = gitbranchOriginSplitLength > 1 ? gitbranchOriginSplit[1] : gitbranch
                    }
                    // Ensure there is no ci skip message
                    def result = sh (script: "git log -1 | grep '\\[ci skip\\]'", returnStatus: true)
                    if (env.BRANCH_NAME == "master" && result != 0) {
                        do_deploy = true
                    }
                    print "git branch is ${env.BRANCH_NAME}, will deploy? ${do_deploy}"
                    git credentialsId: "${env.GITHUB_CLONE_CREDENTIALS}", url: "${env.GITHUB_CLONE_URL}", branch: "${gitbranch}"
                }
            }
        }
        stage('Show Environment') {
            steps {
              nodejs('Node') {
                sh "env"
                sh "node --version"
                sh "npm --version"
              }
            }
        }
        stage('Install Dependencies') {
            steps {
              nodejs('Node') {
                sh "rm -rf node_modules"
                sh "npm install"
              }
            }
        }
        stage('Test') {
            steps {
              nodejs('Node') {
                sh "npm test"
              }
            }
        }
        stage('Publish') {
            when {
                expression {
                    return do_deploy == true
                }
            }
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'smacdona-git.corp', keyFileVariable: 'GITHUB_KEY')]) {
                    withEnv(["GIT_SSH_COMMAND=ssh -i $GITHUB_KEY -o StrictHostKeyChecking=no"]) {
                        nodejs('Node') {
                          print "git key is ${GITHUB_KEY}"
                          sh "git checkout -- package-lock.json"
                          sh "npm version patch"
                          sh "git commit --amend -m 'tagging release [ci skip]'"
                          sh "git push --tags ${GITHUB_CLONE_URL} master"
                        }
                    }
                }
                withCredentials([usernamePassword(credentialsId:'smacdona-git-corp-pat', usernameVariable: 'USERNAME', passwordVariable: 'APITOKEN')]) {
                    nodejs('Node') {
                      sh """
                        export HOME=/tmp
                        curl -u \${USERNAME}:\${APITOKEN} https://artifactory.corp.adobe.com/artifactory/api/npm/auth > \$HOME/.npmrc
                        npm publish
                      """
                    }
                }
            }
        }
    }
}
