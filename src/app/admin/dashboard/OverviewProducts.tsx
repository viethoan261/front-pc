import React from "react";
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from "@mui/material";
import { ArrowDownward, ArrowUpward, Category } from "@material-ui/icons";

interface Props {
  difference: number;
  positive: boolean;
  sx: any;
  value: number;
}
export const OverviewProducts: React.FC<Props> = (props) => {
  const { difference, positive = false, sx, value } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              Tổng số sản phẩm
            </Typography>
            <Typography variant="h4">{value}</Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "error.main",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>
              <Category />
            </SvgIcon>
          </Avatar>
        </Stack>
        {difference ? (
          <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
            <Stack alignItems="center" direction="row" spacing={0.5}>
              <SvgIcon color={positive ? "success" : "error"} fontSize="small">
                {positive ? <ArrowUpward /> : <ArrowDownward />}
              </SvgIcon>
              <Typography color={positive ? "success.main" : "error.main"} variant="body2">
                {difference}%
              </Typography>
            </Stack>
            <Typography color="text.secondary" variant="caption">
              so với ngày hôm qua
            </Typography>
          </Stack>
        ) : (
          <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
            <Typography color="text.secondary" variant="caption">
              Không có sự thay đổi
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default OverviewProducts;
