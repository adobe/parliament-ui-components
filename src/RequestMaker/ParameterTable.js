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

import React, { Fragment } from "react";
import {
  ActionButton,
  Checkbox,
  Grid,
  TextField,
  View,
} from "@adobe/react-spectrum";
import PropTypes from "prop-types";
import Delete from "@spectrum-icons/workflow/DeleteOutline";
import { AutoComplete } from "../AutoComplete";

const TableCell = ({ head = false, children }) => (
  <View
    UNSAFE_className={head ? "spectrum-Table-headCell" : "spectrum-Table-cell"}
    borderBottomWidth="thin"
    borderColor="dark"
  >
    {children}
  </View>
);

const TableCellHead = ({ children }) => <TableCell head>{children}</TableCell>;

const TableRow = ({ keyItem, value }) => (
  <>
    <TableCell />
    <TableCell>{keyItem}</TableCell>
    <TableCell>{value}</TableCell>
    <TableCell />
  </>
);

const TableRowEditable = ({
  enabled = true,
  keyItem = "",
  value = "",
  index,
  completions,
  onDelete,
  onUpdate,
}) => {
  return (
    <>
      <TableCell>
        <Checkbox
          isSelected={enabled && keyItem !== ""}
          onChange={(value) => onUpdate && onUpdate(index, { enabled: value })}
        />
      </TableCell>
      <TableCell>
        <AutoComplete
          value={keyItem}
          index={index}
          placeholder="key"
          onUpdate={onUpdate}
          completions={completions}
        />
      </TableCell>
      <TableCell>
        <TextField
          isQuiet
          value={value}
          width="100%"
          placeholder="value"
          onChange={(value) => onUpdate && onUpdate(index, { value: value })}
        />
      </TableCell>
      <TableCell>
        <ActionButton
          isQuiet
          isDisabled={keyItem === "" && value === ""}
          onPress={() => onDelete && onDelete(index)}
        >
          <Delete size="S" />
        </ActionButton>
      </TableCell>
    </>
  );
};

const EmptyRow = {
  enabled: true,
  key: "",
  value: "",
  deletable: true,
};

const ParameterTable = ({
  readonly = false,
  items = [],
  completions,
  callback,
}) => {
  const tableItems = [...items];
  if (
    tableItems.filter((item) => item.key === "" && item.value === "").length < 1
  ) {
    if (!readonly) {
      tableItems.push({ ...EmptyRow });
    }
  }

  const rows = tableItems.map(({ enabled, key, value }, index) => {
    return readonly ? (
      <TableRow key={index} keyItem={key} value={value} />
    ) : (
      <TableRowEditable
        index={index}
        enabled={enabled}
        keyItem={key}
        value={value}
        completions={completions}
        onDelete={(key) => {
          const copyOfTableItems = [...tableItems];
          copyOfTableItems.splice(index, 1);
          callback && callback(copyOfTableItems);
        }}
        onUpdate={(index, update) => {
          const copyOfTableItems = [...tableItems];
          copyOfTableItems[index] = { ...copyOfTableItems[index], ...update };
          if (
            copyOfTableItems.filter(
              (item) => item.key === "" && item.value === ""
            ).length < 1
          ) {
            copyOfTableItems.push({ ...EmptyRow });
          }
          callback && callback(copyOfTableItems);
        }}
      />
    );
  });

  return (
    <View
      borderWidth="thin"
      borderRadius="medium"
      borderColor="dark"
      padding="size-250"
      backgroundColor="gray-50"
      minHeight="size-2400"
    >
      <Grid
        columns={["size-500", "1fr", "1fr", "size-500"]}
        autoRows="size-675"
        UNSAFE_className="spectrum-Table"
      >
        <TableCellHead />
        <TableCellHead>Key</TableCellHead>
        <TableCellHead>Value</TableCellHead>
        <TableCellHead />
        {rows}
      </Grid>
    </View>
  );
};

ParameterTable.propTypes = {
  name: PropTypes.string.isRequired,
};

export { ParameterTable };
