/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useEffect, useState } from 'react'
import {
  defaultTheme,
  Button,
  Grid,
  ProgressCircle,
  Provider,
  Switch,
  View
} from '@adobe/react-spectrum'
import { ReDocWrapper } from './ReDocWrapper'
import { DynamicSwaggerUI } from './DynamicSwaggerUI'

const hideInternalRoutes = (spec) => {
  const specCopy = JSON.parse(JSON.stringify(spec))
  const { paths } = specCopy
  for (const path in paths) {
    for (const route in paths[path]) {
      if (paths[path][route]['x-internal']) {
        delete paths[path][route]
      }
    }
  }
  return specCopy
}

export const OpenAPIBlock = ({
  specUrl,
  spec,
  backButton = true,
  backUrl,
  engine = 'redoc'
}) => {
  const [showProgress, setShowProgress] = useState(true)
  const [hideInternal, setHideInternal] = useState(false)
  const [loadingData, setLoadingData] = useState(true)
  const [internal, setInternal] = useState(null)
  const [external, setExternal] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      let data = spec
      if (specUrl) {
        data = await (await fetch(specUrl)).json()
      }
      setInternal(data)
      setExternal(hideInternalRoutes(data))
      setLoadingData(false)
    }

    fetchData()
  }, [specUrl, spec])

  const openApiRenderer = (engine) =>
    engine === 'swagger-ui' ? (
      <DynamicSwaggerUI
        spec={!hideInternal ? internal : external}
        onComplete={() => {
          setShowProgress(false)
        }}
      />
    ) : (
      <ReDocWrapper
        spec={!hideInternal ? internal : external}
        onComplete={() => {
          setShowProgress(false)
        }}
      />
    )

  return (
    <div
      css={css`
        height: calc(100% - 64px);
      `}
    >
      {engine !== 'swagger-ui' && (
        <Provider theme={defaultTheme} colorScheme='dark'>
          <View backgroundColor='blue-400'>
            <Grid
              areas={['backToDocs privateRoutes']}
              columns={['1fr', '1fr']}
              rows={['auto']}
              height='size-600'
              gap='size-100'
              alignItems='center'
              marginStart='size-100'
            >
              <View gridArea='backToDocs'>
                {backButton && (
                  <Button
                    variant='overBackground'
                    onPress={() => {
                      backUrl
                        ? (document.location.href = backUrl)
                        : window.history.back()
                    }}
                  >
                    Back to Docs
                  </Button>
                )}
              </View>
              <View gridArea='privateRoutes' justifySelf='self-end'>
                <Switch isSelected={hideInternal} onChange={setHideInternal}>
                  Hide Internal Routes
                </Switch>
              </View>
            </Grid>
          </View>
        </Provider>
      )}

      <div
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: ${showProgress ? 'grid' : 'none'};
          place-items: center center;
        `}
      >
        <ProgressCircle aria-label='Loading…' isIndeterminate size='L' />
      </div>

      {!loadingData ? openApiRenderer(engine) : null}
    </div>
  )
}
