import { HStack, Text, VStack } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";

type HeaderProps = {
  pageName: String;
  actions?: ReactNode;
};

export const Header: FC<HeaderProps> = ({ pageName, actions }) => {
  const { t } = useTranslation();

  return (
    <HStack justify="space-between">
      <VStack
        align="start"
        __css={{
          "& .menuList": {
            direction: "ltr",
          },
        }}
        position="relative"
        gap="1"
      >
        <Text color="text" as="h1" fontWeight="semibold" fontSize="xl">
          {t(pageName + ".title")}
        </Text>
        <Text color="text">{t(pageName + ".description")}</Text>
      </VStack>
      {actions}
    </HStack>
  );
};