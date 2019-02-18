/* @flow */

import React from 'react';
import { graphql } from 'react-relay';
import { Flex } from '@rebass/grid/emotion';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Link } from '../../controls/link';

import {
  type FragmentRefs,
  createFragment,
  createMutation,
} from '../../controls/relay';

import type { Property_property } from './__generated__/Property_property.graphql';
import type { PropertyUpsertMutation } from './__generated__/PropertyUpsertMutation.graphql';

type PropertyData = {|
  lead?: Property_property,
|};

const PropertyFragment = createFragment<PropertyData>(
  graphql`
    fragment Property_property on Property {
      id
      livingSurface
      landSurface
      numberOfRooms
      numberOfParkings
    }
  `
);

const PropertyUpsertLead = createMutation<PropertyUpsertMutation, {}>(graphql`
  mutation PropertyUpsertMutation($input: UpsertPropertyInput!) {
    upsertProperty(input: $input) {
      property {
        id
        livingSurface
        landSurface
        numberOfRooms
        numberOfParkings
      }
    }
  }
`);

type Props = {|
  ...FragmentRefs<PropertyData>,
  step?: string,
|};

export const Property = (props: Props) => {
  lo
  return (
    <>
      <PropertyFragment property={props.property}>
        {(/* use { property } to get the query data*/) => (
          <Flex justifyContent="center">
            <Paper
              css={{ maxWidth: 960, marginTop: 16, width: '100%', padding: 16 }}
            >
            <Link href={{ pathname: '/createProperty' }}>
              <Button to="/createProperty" color="primary" variant="contained">
                CREATE NEW 
              </Button>
            </Link>
              <PropertyUpsertLead>
                {(/* use { mutate, mutating } to commit changes to the API */) => (
                  <>
                    <Typography variant="h6">Properties
                    <Paper>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Living surface</TableCell>
                            <TableCell align="right">Land surface</TableCell>
                            <TableCell align="right">Number of rooms</TableCell>
                            <TableCell align="right">Number of parkings</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                              <TableCell component="th" scope="row">
                                21.5
                              </TableCell>
                              <TableCell align="right">54.6</TableCell>
                              <TableCell align="right">46.3</TableCell>
                              <TableCell align="right">26</TableCell>
                            </TableRow>
                        </TableBody>
                      </Table>
                    </Paper>
                    </Typography>
                    <Link href={{ pathname: '/' }}>
                      <Button
                        to="/"
                        color="primary"
                        variant="contained"
                        css={{ marginTop: 80 }}
                      >
                        Back to instructions
                      </Button>
                    </Link>
                  </>
                )}
              </PropertyUpsertLead>
            </Paper>
          </Flex>
        )}
      </PropertyFragment>
    </>
  );
};
