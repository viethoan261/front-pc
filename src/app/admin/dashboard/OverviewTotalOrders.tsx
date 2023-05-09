import { List } from "@material-ui/icons";
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from "@mui/material";
import React from "react";

const OverviewTotalOrders: React.FC<{ value: number }> = ({ value }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              Tổng số đơn hàng
            </Typography>
            <Typography variant="h4">{value}</Typography>
            <Typography color="text.secondary" variant="caption">
              (Thống kê chi tiết trong biểu đồ tròn dưới đây)
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "error.main",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>
              <List />
            </SvgIcon>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default OverviewTotalOrders;
