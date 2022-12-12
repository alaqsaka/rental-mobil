import {
  Container,
  Grid,
  Paper,
  Text,
  Box,
  Tabs,
  Input,
  Button,
  Badge,
  Image,
} from "@mantine/core";

import { IconMessage, IconPlus, IconSearch } from "@tabler/icons";
import React from "react";

export default function Transaksi() {
  return (
    <Box>
      <Text fz="lg" fw={600}>
        Transaksi
      </Text>

      <Grid mt={16}>
        <Grid.Col xs={12} sm={6}>
          <Input icon={<IconSearch size={16} />} placeholder="Cari transaksi" />
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <Button
            fullWidth
            component="a"
            href="/sewa"
            leftIcon={<IconPlus size={16} />}
          >
            Sewa Mobil
          </Button>
        </Grid.Col>
      </Grid>

      <Box mt={50}>
        <Paper radius="md" withBorder p="md">
          <Box display="flex" style={{ gap: "10px", alignItems: "center" }}>
            <Text fz="sm">30 Nov, 2022</Text>
            <Badge color="green" radius="md" size="md">
              Paid
            </Badge>
          </Box>

          <Grid mt={16} columns={12}>
            <Grid.Col sm={6} md={9} style={{ display: "flex", gap: "16px" }}>
              <Box w={150}>
                <Image
                  src="https://i.imgur.com/ZL52Q2D.png"
                  alt="Tesla Model S"
                />
              </Box>
              <Box>
                <Text fz="lg" fw={600}>
                  Tesla Model S
                </Text>
                <Text fz="sm" color="dimmed">
                  3 hari x Rp150.000
                </Text>
              </Box>
            </Grid.Col>

            <Grid.Col sm={12} md={3}>
              <Text fz="sm" color="dimmed">
                Total Bayar
              </Text>
              <Text fz="lg" fw={600}>
                Rp 450.000
              </Text>
            </Grid.Col>
          </Grid>

          <Grid justify="flex-end" mt={16}>
            <Grid.Col span="content">
              <Button variant="subtle">Lihat Detail Transaksi</Button>
            </Grid.Col>
            <Grid.Col span="content">
              <Button leftIcon={<IconMessage size={16} />}>Chat Admin</Button>
            </Grid.Col>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}
