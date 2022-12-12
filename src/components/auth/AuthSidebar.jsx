import React from "react";
import { createStyles, Tabs, TabsProps } from "@mantine/core";
// import Link from "next/link";
import { Link } from "react-router-dom";
import { IconUser, IconReportMoney, IconLogout } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  tab: {
    fontSize: "16px",
    padding: "16px",
  },
}));

const AuthSidebar = (props) => {
  const { classes } = useStyles();
  return (
    <div style={{ width: "100%" }}>
      <Tabs
        variant="pills"
        style={{ width: "100%" }}
        defaultValue="transaksi"
        orientation="vertical"
      >
        <Tabs.List style={{ width: "100%" }}>
          <Link to={"/dashboard/transaksi"} style={{ textDecoration: "none" }}>
            <Tabs.Tab
              value="transaksi"
              className={classes.tab}
              icon={<IconReportMoney size={19} />}
            >
              Transaksi
            </Tabs.Tab>
          </Link>
          <Link to={"/dashboard/profile"} style={{ textDecoration: "none" }}>
            <Tabs.Tab
              value="profile"
              className={classes.tab}
              icon={<IconUser size={19} />}
            >
              Profile
            </Tabs.Tab>
          </Link>
          <Link href={"/logout"}>
            <Tabs.Tab
              value="keluar"
              className={classes.tab}
              icon={<IconLogout size={19} />}
            >
              Keluar
            </Tabs.Tab>
          </Link>
        </Tabs.List>
      </Tabs>
    </div>
  );
};

export default AuthSidebar;
