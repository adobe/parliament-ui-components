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
import styled from '@emotion/styled'

const Grid = styled.div`
  display: grid;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media screen and (min-width: 1201px) {
    grid-template-rows: 1fr 30px;
    grid-template-columns: 256px repeat(11, 1fr);
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    grid-template-rows: 1fr 30px;
    grid-template-columns: 256px repeat(9, 1fr);
  }
  @media screen and (max-width: 767px) {
    grid-template-rows: 30px 1fr 30px;
    grid-template-columns: repeat(10, 1fr);
  }
`

const GridContent = styled.div`
  padding-top: 30px;
  padding-left: 24px;
  padding-right: 24px;

  @media screen and (min-width: 1201px) {
    grid-area: 1 / 2 / 2 / 11;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    grid-area: 1 / 2 / 2 / 11;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
  @media screen and (max-width: 767px) {
    grid-area: 2 / 1 / 3 / 11;
  }
`
const GridContentInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`

const GridFooter = styled.div`
  @media screen and (min-width: 1201px) {
    grid-area: 2 / 3 / 3 / 13;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    grid-area: 2 / 3 / 3 / 11;
  }
  @media screen and (max-width: 767px) {
    grid-area: 3 / 1 / 4 / 11;
  }
`

const GridNav = styled.div`
  @media screen and (min-width: 768px) {
    grid-area: 1 / 1 / 3 / 2;
  }
  @media screen and (max-width: 767px) {
    grid-area: 1 / 1 / 2 / 11;
  }
`

export { Grid, GridContent, GridContentInner, GridFooter, GridNav }
