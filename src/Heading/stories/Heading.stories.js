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

import React from "react";

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "../index";

export default {
  title: "components/Heading",
};

export const HeadingOne = () => <Heading1>Heading 1</Heading1>;

export const HeadingTwo = () => <Heading2>Heading 2</Heading2>;

export const HeadingThree = () => <Heading3>Heading 3</Heading3>;

export const HeadingFour = () => <Heading4>Heading 4</Heading4>;

export const HeadingFive = () => <Heading5>Heading 5</Heading5>;

export const HeadingSix = () => <Heading6>Heading 6</Heading6>;

export const HeadingOneWithLink = () => (
  <Heading1>
    <a href="#">Heading 1</a>
  </Heading1>
);

export const HeadingTwoWithLink = () => (
  <Heading2>
    <a href="#">Heading 2</a>
  </Heading2>
);

export const HeadingThreeWithLink = () => (
  <Heading3>
    <a href="#">Heading 3</a>
  </Heading3>
);

export const HeadingFourWithLink = () => (
  <Heading4>
    <a href="#">Heading 4</a>
  </Heading4>
);

export const HeadingFiveWithLink = () => (
  <Heading5>
    <a href="#">Heading 5</a>
  </Heading5>
);

export const HeadingSixWithLink = () => (
  <Heading6>
    <a href="#">Heading 6</a>
  </Heading6>
);
export const HeadingOneWithLinkAndText = () => (
  <Heading1>
    <a href="#">Heading 1</a> AndText
  </Heading1>
);

export const HeadingTwoWithLinkAndText = () => (
  <Heading2>
    <a href="#">Heading 2</a> AndText
  </Heading2>
);

export const HeadingThreeWithLinkAndText = () => (
  <Heading3>
    <a href="#">Heading 3</a> AndText
  </Heading3>
);

export const HeadingFourWithLinkAndText = () => (
  <Heading4>
    <a href="#">Heading 4</a> AndText
  </Heading4>
);

export const HeadingFiveWithLinkAndText = () => (
  <Heading5>
    <a href="#">Heading 5</a> AndText
  </Heading5>
);

export const HeadingSixWithLinkAndText = () => (
  <Heading6>
    <a href="#">Heading 6</a> AndText
  </Heading6>
);
