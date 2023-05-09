import { Container, Grid } from "@material-ui/core";
import axios from "axios";
import { useLayoutEffect, useState } from "react";
import { BaseUrl } from "../../contant/Contant";
import OverviewAccounts from "./OverviewAccounts";
import OverviewProducts from "./OverviewProducts";
import { OverviewTasksProgress } from "./OverviewComments";
import { OverviewOrders } from "./OverviewOrders";
import OverviewTotalOrders from "./OverviewTotalOrders";
import OverviewStacked from "./OverviewStacked";

const DashboardScreen = () => {
  const [data, setData] = useState<any>({});

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}admin/statistics`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={3}>
          <OverviewProducts
            difference={100 - Number(((data?.products?.totalExceptToday * 100) / data?.products?.total).toFixed(2))}
            positive={data?.products?.total - data?.products?.totalExceptToday >= 0}
            sx={{ height: "100%" }}
            value={data?.products?.total}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <OverviewAccounts
            difference={100 - Number(((data?.accounts?.totalExceptToday * 100) / data?.accounts?.total).toFixed(2))}
            positive={data?.accounts?.total - data?.accounts?.totalExceptToday > 0}
            sx={{ height: "100%" }}
            value={data?.accounts?.total}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <OverviewTasksProgress value={Number((data?.comments?.fiveStar / data?.comments?.total).toFixed(2)) * 100} />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <OverviewTotalOrders value={Number((data?.comments?.fiveStar / data?.comments?.total).toFixed(2)) * 100} />
        </Grid>
        <Grid item xs={12} lg={8}>
          <OverviewStacked data={data?.stacked} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <OverviewOrders data={data?.orders} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardScreen;
