// import React, { useEffect, useState } from "react";
import { Table } from "@mantine/core";
import { useNavigate } from "react-router-dom";
// import data from "../Wine-Data.json";
import useData from "../utils/useData";
import useCalculations from "../utils/useCalculations";
import useOrganize from "../utils/useOrganize";

const Tables = ({ Data, name }) => {
  const distinctAlcoholCount = useData();
  const statistics = useCalculations(Data);
  const tableData = useOrganize(statistics);
  const navigate = useNavigate();

  const rows = tableData.map(({ mean = {}, median = {}, mode = {} }, index) => {
    let data = {};
    if (index === 0) {
      data = mean;
    } else if (index === 1) {
      data = median;
    } else if (index === 2) {
      data = mode;
      return (
        <Table.Tr key={index}>
          <Table.Td>
            <b>{name} Mode</b>
          </Table.Td>
          <Table.Td>
            {(data["1"] ? data["1"].join("\n") : "d") || "No Mode"}
          </Table.Td>
          <Table.Td>
            {(data["2"] ? data["2"].join("\n") : "d") || "No Mode"}
          </Table.Td>
          <Table.Td>
            {(data["3"] ? data["3"].join("\n") : "d") || "No Mode"}
          </Table.Td>
        </Table.Tr>
      );
    }
    return (
      <Table.Tr key={index}>
        <Table.Td>
          <b>{data === mean ? name + " Mean" : name + " Median"}</b>
        </Table.Td>
        <Table.Td>{data["1"] ? data["1"] : "d"}</Table.Td>
        <Table.Td>{data["2"] ? data["2"] : "d"}</Table.Td>
        <Table.Td>{data["3"] ? data["3"] : "d"}</Table.Td>
      </Table.Tr>
    );
  });

  const Change = () => {
    name === "Flavanoid" ? navigate("/gamma") : navigate("/");
  };
  return (
    <div className={"wrapper"}>
      <h2>{name === "Flavanoid" ? "Flavanoid" : "Gamma"} Data</h2>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Measure</Table.Th>
            {distinctAlcoholCount.map((Alcohol, index) => {
              return <Table.Th key={index}>class {Alcohol}</Table.Th>;
            })}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <button onClick={Change}>
        Check {name === "Flavanoid" ? "Gamma" : "Flavanoid"} Table
      </button>
    </div>
  );
};

export default Tables;
