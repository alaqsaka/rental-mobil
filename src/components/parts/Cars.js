import React from "react";
import {
  Grid,
  Container,
  Title,
  createStyles,
  Group,
  Badge,
} from "@mantine/core";
import CarCard from "./CarCard";

const useStyles = createStyles((theme) => ({
  title: {
    // fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },
}));

const Cars = () => {
  const { classes, theme } = useStyles();
  return (
    <Container>
      <Group position="center">
        <Badge variant="filled" size="lg">
          Tersedia mobil modern dan pastinya keren
        </Badge>
      </Group>
      <Title order={2} className={classes.title} align="center" mt="sm" pb={16}>
        Kendaraan Favorit di DriveNow
      </Title>

      <Grid>
        <Grid.Col md={6} lg={4}>
          <CarCard />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <CarCard />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <CarCard />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <CarCard />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <CarCard />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <CarCard />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Cars;
