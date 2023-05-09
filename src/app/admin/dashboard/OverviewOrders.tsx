import { Box, Card, CardContent, CardHeader, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";

interface Props {
  data: DataProps;
}

interface DataProps {
  status: StatusProps[];
  total: number;
}

interface StatusProps {
  label: string;
  amount: number;
}

export const OverviewOrders: React.FC<Props> = (props) => {
  const theme = useTheme();
  const { data } = props;

  const labels = ["Đang chờ", "Hoạt động", "Đã nhận", "Thành công", "Đang giao"];
  const chartSeries = data ? data.status.map((status) => status.amount) : [];

  return (
    <Card sx={{ height: "100%" }}>
      <CardHeader
        title={
          <Typography color="text.secondary" variant="overline">
            Tỉ lệ trạng thái đơn hàng
          </Typography>
        }
      />
      <CardContent>
        <Chart
          height={300}
          options={{
            chart: {
              background: "transparent",
            },
            colors: [
              "#FFA500",
              theme.palette.success.light,
              theme.palette.primary.main,
              theme.palette.success.dark,
              theme.palette.error.main,
            ],
            dataLabels: {
              enabled: false,
            },
            labels,
            legend: {
              show: false,
            },
            plotOptions: {
              pie: {
                expandOnClick: false,
              },
            },
            states: {
              active: {
                filter: {
                  type: "none",
                },
              },
              hover: {
                filter: {
                  type: "none",
                },
              },
            },
            stroke: {
              width: 0,
            },
            theme: {
              mode: theme.palette.mode,
            },
            tooltip: {
              fillSeriesColor: false,
            },
          }}
          series={chartSeries}
          type="donut"
          width="100%"
        />
        <Stack alignItems="center" direction="row" justifyContent="center" spacing={2} sx={{ mt: 2 }}>
          {chartSeries.map((item, index) => {
            const label = labels[index];
            return (
              <Box
                key={label}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* {iconMap[label]} */}
                <Typography color="text.secondary" variant="caption">
                  {label}
                </Typography>
                <Typography color="text.secondary" variant="subtitle2">
                  {data ? Number(((item * 100) / data.total).toFixed(1)) : 0}%
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  );
};
