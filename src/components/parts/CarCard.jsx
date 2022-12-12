import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button,
} from "@mantine/core";
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

const mockdata = [
  { label: "4 passengers", icon: IconUsers },
  { label: "100 km/h in 4 seconds", icon: IconGauge },
  { label: "Automatic gearbox", icon: IconManualGearbox },
  { label: "Electric", icon: IconGasStation },
];

export default function CarCard(props) {
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size={18} className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image
          src={`http://localhost:5000/${props.image}`}
          alt="Tesla Model S"
        />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text weight={500}>Tesla Model S</Text>
          <Text mt="sm" mb="md" color="dimmed" size="xs">
            {props?.description}
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text size="sm" color="dimmed" className={classes.label}>
          Spesifikasi
        </Text>

        <Group spacing={8} mb={-8}>
          <Center>
            <IconUsers size={18} className={classes.icon} stroke={1.5} />
            <Text size="xs">{props.totalSeat} Penumpang</Text>
          </Center>
          <Center>
            <IconGasStation size={18} className={classes.icon} stroke={1.5} />
            <Text size="xs">Bensin {props.fuelType} </Text>
          </Center>
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
              IDR {props?.price}
            </Text>
            <Text
              size="sm"
              color="dimmed"
              weight={500}
              sx={{ lineHeight: 1 }}
              mt={3}
            >
              per hari
            </Text>
          </div>

          {!props?.selected && (
            <Button
              radius="xl"
              style={{ flex: 1 }}
              onClick={() => props.setCar(props.id)}
            >
              Sewa Sekarang
            </Button>
          )}
        </Group>
      </Card.Section>
    </Card>
  );
}
