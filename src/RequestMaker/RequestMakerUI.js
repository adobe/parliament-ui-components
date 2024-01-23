/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React from "react";
import { Grid, View, TextField } from "@adobe/react-spectrum";

import { queryString } from "./utils";

import { MethodPicker } from "./MethodPicker";
import { RequestParameters } from "./RequestParameters";
import { ResponsePanel } from "./ResponsePanel";
import { useRequestState } from "./RequestContext";
import { SendRequestButton } from "./SendRequestButton";

const RequestMakerUI = ({
  methods,
  defaultMethod,
  url,
  children,
  ...props
}) => {
  const state = useRequestState();

  return (
    <div
      style={{
        margin:
          "var(--spectrum-global-dimension-size-200) 0 var(--spectrum-global-dimension-size-200) 0",
      }}
      {...props}
    >
      <View
        borderWidth="thick"
        borderRadius="medium"
        borderColor="dark"
        padding="size-250"
        backgroundColor="gray-75"
      >
        <Grid
          areas={["left  right"]}
          columns={["auto", "3fr"]}
          rows={["auto"]}
          gap="size-100"
        >
          <MethodPicker defaultMethod={defaultMethod} methods={methods} />
          <TextField value={url + queryString(state.query)} width="100%" />
        </Grid>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--spectrum-global-dimension-size-100",
          }}
        >
          <RequestParameters url={url + queryString(state.query)}>
            {children}
          </RequestParameters>
          <SendRequestButton url={url} />
          <ResponsePanel />
        </div>
      </View>
    </div>
  );
};
RequestMakerUI.propTypes = {};

export { RequestMakerUI };
