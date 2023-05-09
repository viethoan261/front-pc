import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";

const OverviewStacked: React.FC<{ data: any }> = ({ data }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardHeader
        title={
          <Typography color="text.secondary" variant="overline">
            Thống kê khác
          </Typography>
        }
      />
      <CardContent>
        <ReactApexChart
          options={{
            chart: {
              stacked: true,
              stackType: "100%",
              toolbar: {
                show: false,
              },
            },
            fill: {
              opacity: 1,
            },
            xaxis: {
              categories: data ? Object.values(data).map((item: any) => item.label) : [],
            },
          }}
          series={[
            {
              name: "Hoạt động",
              data: data ? Object.values(data).map((item: any) => item.isActive) : [],
            },
            {
              name: "Không hoạt động",
              data: data ? Object.values(data).map((item: any) => item.total - item.isActive) : [],
            },
          ]}
          type="bar"
          height={350}
        />
      </CardContent>
    </Card>
  );
};

export default OverviewStacked;
