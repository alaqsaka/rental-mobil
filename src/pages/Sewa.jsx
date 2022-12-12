import {
  Box,
  Button,
  createStyles,
  Grid,
  Paper,
  Select,
  Text,
} from "@mantine/core";
//   import Head from "next/head";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AuthNavbar from "../components/auth/AuthNavbar";
import bg from "../assets/bg.svg";
import { useForm } from "@mantine/form";
import { DatePicker, DateRangePicker } from "@mantine/dates";
import { IconCalendar, IconLocation } from "@tabler/icons";
//   import Router from "next/router";
import { useNavigate } from "react-router-dom";
import { Router } from "react-router";
import moment from "moment/moment";
import dayjs from "dayjs";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      boxSizing: "border-box",
      position: "relative",
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      border: "1px solid transparent",
      padding: theme.spacing.xl,
      flex: "0 0 280px",
      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
      height: "300px",
      display: "flex",
      alignItems: "center",
    },
    title: {
      color: theme.white,
      fontSize: 40,
      fontWeight: 900,
      lineHeight: 1.1,

      [theme.fn.smallerThan("sm")]: {
        fontSize: 40,
        lineHeight: 1.2,
      },

      [theme.fn.smallerThan("xs")]: {
        fontSize: 28,
        lineHeight: 1.3,
      },
    },
    inputs: {
      position: "absolute",
      margin: "0 auto",
      display: "flex",
      marginTop: "-80px",
      justifyContent: "center",
      alignContent: "center",
      width: "100%",
      zIndex: "1",
    },
  };
});

export default function Sewa() {
  const navigate = useNavigate();
  const [lokasi, setLokasi] = useState();
  const [loading, setLoading] = useState(false);
  const lokasiData = [];

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5000/lokasi").then((res) => {
      console.log(res);
      setLokasi(res.data.data);
    });
    setLoading(false);
  }, []);

  lokasi?.map((item) => {
    lokasiData.push({ value: item.id, label: item.name });
  });
  console.log(lokasiData);

  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      lokasi: "",
      date: "",
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
    console.log(values.date[0]);
    console.log(values.date[1]);

    const data = {
      startDate: dayjs(values.date[0]).toISOString(),
      endDate: dayjs(values.date[1]).toISOString(),
      lokasi: values.lokasi,
    };

    console.log(data);

    navigate({
      pathname: "/cari",
      search: `?lokasi=${data.lokasi}&startDate=${data.startDate}&endDate=${data.endDate}`,
    });
  };

  return (
    <>
      <AuthNavbar />

      <Box className={classes.wrapper}>
        <Text className={classes.title}>
          Sewa mobil murah dan cepat di DriveNow
        </Text>
      </Box>
      <Box className={classes.inputs} p="md">
        <Paper radius="md" p="md" sx={{ width: "768px" }}>
          Pesan rental mobil cepat dan mudah di sini
          {loading ? (
            <p>Loading...</p>
          ) : (
            <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
              <Grid mt="md">
                <Grid.Col xs={12} md={12} lg={4}>
                  <Box>
                    <Select
                      label="Lokasi Sewa Mobil"
                      placeholder="Pilih Lokasi Sewa"
                      searchable
                      size="md"
                      nothingFound="Tidak tersedia"
                      icon={<IconLocation size={25} />}
                      {...form.getInputProps("lokasi")}
                      data={lokasiData}
                    />
                  </Box>
                </Grid.Col>
                <Grid.Col xs={12} md={6} lg={5}>
                  <DateRangePicker
                    placeholder="Tanggal Mulai dan Selesai Sewa"
                    label="Pilih Tanggal Mulai dan Selesai Sewa"
                    radius="md"
                    size="md"
                    icon={<IconCalendar size={25} />}
                    {...form.getInputProps("date")}
                  />
                </Grid.Col>
                <Grid.Col
                  xs={12}
                  md={6}
                  lg={3}
                  display="flex"
                  style={{ alignItems: "end" }}
                >
                  <Box>
                    <Button radius="md" size="md" fullWidth type="submit">
                      Lihat Pilihan Mobil
                    </Button>
                  </Box>
                </Grid.Col>
              </Grid>
            </form>
          )}
        </Paper>
      </Box>
    </>
  );
}
