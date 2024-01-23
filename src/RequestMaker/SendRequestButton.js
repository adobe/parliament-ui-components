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
import { Button, Switch, Text, View } from "@adobe/react-spectrum";

import Send from "@spectrum-icons/workflow/Send";

import { useRequest } from "./RequestContext";
import { getHeaders, queryString } from "./utils";

const SendRequestButton = ({ url }) => {
  const [state, dispatch] = useRequest();
  const [selected, setSelection] = React.useState(true);

  const sendRequest = async () => {
    try {
      console.log(state);
      const requestOptions = {
        method: state.method,
        headers: getHeaders(state.headers),
        mode: selected ? "cors" : "no-cors",
      };
      if (state.method !== "GET" && state.body !== null) {
        if (state.bodyType === "form-data") {
          const formData = new FormData();
          state.body
            .filter((item) => item.enabled && item.key !== "")
            .map((item) => formData.append(item.key, item.value));
          requestOptions.body = formData;
        } else if (state.bodyType === "urlencoded") {
          const formData = new URLSearchParams();
          state.body
            .filter((item) => item.enabled && item.key !== "")
            .map((item) => formData.append(item.key, item.value));
          requestOptions.body = formData;
        } else if (state.bodyType === "raw") {
          requestOptions.body = state.body;
          console.log("about to call break in raw");
        } else if (state.bodyType === "binary") {
          requestOptions.body = state.body;
          console.log("about to call break in binary");
        } else if (state.bodyType === "none") {
          // to do
        } else {
          // to do
        }
      }
      console.log(requestOptions);
      const t0 = performance.now();
      const response = await fetch(
        url + queryString(state.query),
        requestOptions
      );
      const t1 = performance.now();
      dispatch({
        type: "setResponse",
        response,
        requestTime: t1 - t0,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Button variant="cta" onPress={sendRequest}>
        <Send />
        <Text>Send</Text>
      </Button>
      <Switch marginX="size-200" isSelected={selected} onChange={setSelection}>
        CORS
      </Switch>
    </View>
  );
};

export { SendRequestButton };
