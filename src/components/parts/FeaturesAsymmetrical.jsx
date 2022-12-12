import {
  createStyles,
  Text,
  SimpleGrid,
  Container,
  Group,
  Badge,
  Title,
} from "@mantine/core";
import React from "react";
import {
  IconTruck,
  IconCertificate,
  IconCoin,
  TablerIcon,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  feature: {
    position: "relative",
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    position: "absolute",
    height: 100,
    width: 160,
    top: 0,
    left: 0,
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    zIndex: 1,
  },

  content: {
    position: "relative",
    zIndex: 2,
  },

  icon: {
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
      .color,
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

function Feature({ icon: Icon, title, description, className, ...others }) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={38} className={classes.icon} stroke={1.5} />
        <Text weight={700} size="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text color="dimmed" size="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconTruck,
    title: "Diantar kemana saja dan kapan saja sesuai keinginan Anda",
    description: "Penjemputan dan pengantaran di area bandara dan dalam kota.",
  },
  {
    icon: IconCertificate,
    title: " Berkualitas dan Tepercaya",
    description:
      "DriveNow menyediakan mobil berkualitas demi kenyamanan bepergian Anda.",
  },
  {
    icon: IconCoin,
    title: "Harga yang Sangat Terjangkau",
    description:
      "Biaya rental mobil di DriveNow sangat terjangkau untuk servis dan kualitas yang Anda dapatkan",
  },
];

export default function FeaturesAsymmetrical() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);
  const { classes, theme } = useStyles();
  return (
    <Container mt={100} mb={150} size="lg">
      <Group position="center">
        <Badge variant="filled" size="lg">
          Rental Mobil Termantap
        </Badge>
      </Group>

      <Title order={2} className={classes.title} align="center" mt="sm">
        Mengapa rental mobil di DriveNow?
      </Title>

      <SimpleGrid
        cols={3}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        spacing={50}
        mt={50}
      >
        {items}
      </SimpleGrid>
    </Container>
  );
}
