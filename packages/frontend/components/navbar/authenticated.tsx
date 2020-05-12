import React, { ChangeEvent } from "react";
import {
  Box,
  Link as _Link,
  Button,
  Stack,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Switch,
  Icon,
} from "@chakra-ui/core";
import { NextComponentType } from "next";
import Link from "next/link";
import Router from "next/router";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo";
import withApollo from "lib/with-apollo";
import { cookieParser, cookieRemover } from "lib/cookie";

const FETCH_USER_QUERY = gql`
  query fetchUser($id: uuid!) {
    user_by_pk(id: $id) {
      id
      user_roles {
        role {
          name
        }
      }
    }
  }
`;

const UPDATE_USER_MUTATION = gql`
  mutation updateUser($id: uuid!, $theme: String) {
    update_user(where: { id: { _eq: $id } }, _set: { theme: $theme }) {
      returning {
        id
        theme
      }
    }
  }
`;

const Navbar: NextComponentType = () => {
  const currentUserId = cookieParser("user-id");
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const borderColor = { light: "gray.300", dark: "gray.700" };
  const color = { light: "gray.800", dark: "gray.100" };

  const { data, loading, error } = useQuery(FETCH_USER_QUERY, {
    variables: { id: currentUserId },
    fetchPolicy: "network-only",
  });

  const [updateUserMutation, { loading: userMutationLoading }] = useMutation(
    UPDATE_USER_MUTATION
  );

  if (loading) {
    return <Box />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { user_roles } = data.user_by_pk;

  const handleToggleTheme = async (e: ChangeEvent<HTMLInputElement>) => {
    const theme: string = !!e.target.checked ? "dark" : "light";

    await updateUserMutation({
      variables: {
        id: currentUserId,
        theme,
      },
    });

    toggleColorMode();
  };

  const handleSignOut = () => {
    cookieRemover("token");
    cookieRemover("user-id");

    Router.push("/sign-up");
  };

  const profileDropDown = () => {
    return (
      <Menu closeOnSelect={false}>
        <MenuButton
          as={Button}
          color={color[colorMode]}
          borderColor={borderColor[colorMode]}
        >
          Profile <Icon name="chevron-down" />
        </MenuButton>
        <MenuList
          color={color[colorMode]}
          borderColor={borderColor[colorMode]}
          placement="bottom-end"
        >
          <MenuGroup title="Profile">
            <MenuItem>
              <Link href="/my-profile">
                <_Link>My Account</_Link>
              </Link>
            </MenuItem>
            <MenuItem>
              <Stack justify="center" align="center" spacing={4} isInline>
                <Box>Dark Theme</Box>
                <Box>
                  <Switch
                    isChecked={colorMode === "dark"}
                    onChange={handleToggleTheme}
                    isDisabled={userMutationLoading}
                  />
                </Box>
              </Stack>
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup>
            <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    );
  };

  return (
    <Box bg={bgColor[colorMode]}>
      <Box
        w="full"
        mx="auto"
        d="flex"
        justifyContent="space-between"
        p={4}
        color={color[colorMode]}
        borderWidth={1}
        borderColor={borderColor[colorMode]}
      >
        <Stack
          isInline
          spacing={4}
          align="center"
          justifyContent="space-between"
          w="full"
        >
          <Box>
            <Stack isInline spacing={4} align="center">
              <Box>
                <Link href="/">
                  <_Link>Home</_Link>
                </Link>
              </Box>
              {user_roles[0].role.name === "admin" ? (
                <Box>
                  <Link href="/users">
                    <_Link>Users</_Link>
                  </Link>
                </Box>
              ) : null}
              <Box>
                <Link href="/boards">
                  <_Link>Boards</_Link>
                </Link>
              </Box>
            </Stack>
          </Box>
          <Box>{profileDropDown()}</Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default withApollo(Navbar);
