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
import React from "react";

import { InlineCode } from "../index";

export default {
  title: "components/InlineCode",
};

export const Default = () => {
  const props = {};

  return (
    <div style={{ backgroundColor: "white" }}>
      This is <InlineCode {...props}>some</InlineCode> highlighted text.
    </div>
  );
};

export const LongLine = () => {
  const props = {};
  const text =
    "https://ims-na1.adobelogin.com/ims/exchange/jwt/client_id={api_key_value}&client_secret={client_secret_value}&jwt_token={base64_encoded_JWT}";

  return (
    <div style={{ backgroundColor: "white" }}>
      This is <InlineCode {...props}>{text}</InlineCode> highlighted text.
    </div>
  );
};
