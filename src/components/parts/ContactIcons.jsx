import {
  createStyles,
  ThemeIcon,
  Text,
  SimpleGrid,
  Box,
  Stack,
} from "@mantine/core";
import { IconSun, IconPhone, IconMapPin, IconAt } from "@tabler/icons";

const useStyles = createStyles((theme, { variant }) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === "gradient"
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : "none",
    backgroundColor: "transparent",
  },

  title: {
    color:
      variant === "gradient"
        ? theme.colors.gray[6]
        : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: variant === "gradient" ? theme.black : theme.white,
  },
}));

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = "gradient",
  className,
  ...others
}) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === "gradient" ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size={24} />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size={24} />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: "Email", description: "admin@drivenow.dev", icon: IconAt },
  {
    title: "Telepon & Whatsapp",
    description: "+62 821 1010 6746",
    icon: IconPhone,
  },
  {
    title: "Alamat",
    description:
      "Jalan RS. Fatmawati Raya, Pd. Labu, Kec. Cilandak, Kota Depok, Jawa Barat 12450",
    icon: IconMapPin,
  },
  { title: "Jam Kerja", description: "8 a.m. – 11 p.m.", icon: IconSun },
];

export function ContactIconsList({ data = MOCKDATA, variant }) {
  const items = data.map((item, index) => (
    <ContactIcon key={index} variant={variant} {...item} />
  ));
  return <Stack>{items}</Stack>;
}

export default function ContactIcons() {
  return (
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundColor: theme.white,
        })}
      >
        <ContactIconsList />
      </Box>

      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundImage: `linear-gradient(135deg, ${
            theme.colors[theme.primaryColor][6]
          } 0%, ${theme.colors[theme.primaryColor][4]} 100%)`,
        })}
      >
        <ContactIconsList variant="white" />
      </Box>
    </SimpleGrid>
  );
}
