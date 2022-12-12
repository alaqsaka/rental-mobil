import { Container, Grid, Box, Paper, Text } from "@mantine/core";
import { Outlet } from "react-router";
import AuthNavbar from "./AuthNavbar";
import AuthSidebar from "./AuthSidebar";

export default function DashboardLayout({ children }) {
  return (
    <Box style={{ backgroundColor: "#F7F9FB", height: "100vh" }}>
      <AuthNavbar />

      <Container mt={120}>
        <Grid>
          <Grid.Col xs={12} sm={4}>
            <Paper withBorder p="md">
              <Text fz="xl" fw={600}>
                Al-Aqsa Krisnaya Abidin
              </Text>

              <Box mt="md">
                <Text fz="sm">Nomor Telepon</Text>
                <Text fz="md">+62 821 1010 6746</Text>
              </Box>
            </Paper>

            <Paper withBorder p="md" mt="md">
              <AuthSidebar />
            </Paper>
          </Grid.Col>
          <Grid.Col xs={12} sm={8}>
            <Paper withBorder p="md">
              <main>
                <Outlet />
              </main>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
