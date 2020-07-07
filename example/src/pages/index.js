/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import React from "react"
import PropTypes from "prop-types"
import Provider from "@react/react-spectrum/Provider"
import { Header, Footer, Feedback, Nav } from "parliament-ui-components"

const data = {
  name: "Events",
  version: "1.0.0",
  description: "Events",
  author: "Emily Walpole",
  view_type: "mdbook",
  meta_keywords: "adobe i/o,events",
  meta_description: "default description",
  publish_date: "22/03/2018",
  show_edit_github_banner: false,
  base_path: "https://raw.githubusercontent.com",
  pages: [
    {
      importedFileName: "readme",
      pages: [
        {
          importedFileName: "webhook-docs-intro",
          pages: [],
          path: "adobedocs/adobeio-events/master/intro/webhook_docs_intro.md",
          title: "Introduction to Webhooks"
        },
        {
          importedFileName: "events-api",
          pages: [],
          path: "adobedocs/adobeio-events/master/intro/events-api.md",
          title: "Working with Events Using Management API"
        },
        {
          importedFileName: "journaling_api",
          pages: [],
          path: "adobedocs/adobeio-events/master/intro/journaling_api.md",
          title: "Journaling API"
        },
        {
          importedFileName: "test.md",
          pages: [],
          path: "test/path/test.md",
          title: "Test of Focus"
        },
        {
          importedFileName: "authentication.md",
          pages: [],
          path: "https://adobe.io/authentication",
          title: "Test of Remote Link"
        }
      ],
      path: "adobedocs/adobeio-events/master/readme.md",
      title: "Getting Started"
    },
    {
      importedFileName: "using",
      pages: [
        {
          importedFileName: "aem-event-setup",
          pages: [],
          path: "adobedocs/adobeio-events/master/using/aem-event-setup.md",
          title: "Setting Up AEM Events"
        },
        {
          importedFileName: "analytics-triggers-event-setup",
          pages: [],
          path:
            "adobedocs/adobeio-events/master/using/analytics-triggers-event-setup.md",
          title: "Integrate Analytics Triggers"
        },
        {
          importedFileName: "cc-asset-event-setup",
          pages: [],
          path: "adobedocs/adobeio-events/master/using/cc-asset-event-setup.md",
          title: "Setting Up Creative Cloud Asset Events"
        },
        {
          importedFileName: "create-event-integration",
          pages: [],
          path:
            "https://www.adobe.io/apis/experiencecloud/cloud-manager/docs.html#!AdobeDocs/cloudmanager-api-docs/master/create-event-integration.md",
          title: "Cloud Manager"
        },
        {
          importedFileName: "gdpr-io-events",
          pages: [],
          path:
            "https://www.adobe.io/apis/experienceplatform/gdpr/docs/alldocs.html#!api-specification/markdown/narrative/gdpr/gdpr-io-events.md",
          title: "GDPR Events"
        }
      ],
      path: "adobedocs/adobeio-events/master/using.md",
      title: "Using Adobe I/O Events"
    },
    {
      importedFileName: "support",
      pages: [
        {
          importedFileName: "debug",
          pages: [],
          path: "adobedocs/adobeio-events/master/support/debug.md",
          title: "Debugging"
        },
        {
          importedFileName: "tracing",
          pages: [],
          path: "adobedocs/adobeio-events/master/support/tracing.md",
          title: "Tracing"
        },
        {
          importedFileName: "Forums",
          pages: [],
          path: "https://forums.adobe.com/community/adobe-io/adobe-io-events",
          title: "Forums"
        },
        {
          importedFileName: "faq",
          pages: [],
          path: "adobedocs/adobeio-events/master/support/faq.md",
          title: "Frequently Asked Questions (FAQ)"
        },
        {
          importedFileName: "release_notes",
          pages: [],
          path: "adobedocs/adobeio-events/master/support/release_notes.md",
          title: "Release Notes"
        }
      ],
      path: "adobedocs/adobeio-events/master/support.md",
      title: "Support"
    }
  ]
}

const index = ({ location }) => {
  const title = "Test Title"
  return (
    <Provider theme="lightest">
      <Header siteTitle={title} />
      <div>Hello world!</div>
      <Nav
        data={data.pages}
        selected="test/path/test.md"
        gitInfo={{ org: "adobedocs", name: "adobeio-events", branch: "master" }}
      />
      <Feedback
        gitUrl="https://git.corp.adobe.com/devrel/parliament-client-template"
        filePath="README.md"
        branch="master"
      />
      <Footer />
    </Provider>
  )
}

index.propTypes = {
  location: PropTypes.object
}

index.defaultProps = {
  location: {}
}

export default index
