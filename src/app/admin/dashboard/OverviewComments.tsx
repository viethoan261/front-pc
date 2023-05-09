import { Star } from "@material-ui/icons";
import { Avatar, Box, Card, CardContent, LinearProgress, Stack, SvgIcon, Typography } from "@mui/material";

interface Props {
  value: number;
}

export const OverviewTasksProgress: React.FC<Props> = (props) => {
  const { value } = props;

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" gutterBottom variant="overline">
              Số đánh giá 5 sao
            </Typography>
            <Stack>
              <Typography variant="h4">{value}%</Typography>
              <Typography color="text.secondary" variant="caption">
                Tổng số đánh giá
              </Typography>
            </Stack>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "warning.main",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>
              <Star />
            </SvgIcon>
          </Avatar>
        </Stack>
        <Box sx={{ mt: 3 }}>
          <LinearProgress value={value} variant="determinate" />
        </Box>
      </CardContent>
    </Card>
  );
};
