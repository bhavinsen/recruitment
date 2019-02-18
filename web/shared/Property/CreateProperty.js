/* @flow */

import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { Flex } from '@rebass/grid/emotion';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { Link } from '../../controls/link';

import {
  type FragmentRefs,
  createFragment,
  createMutation,
} from '../../controls/relay';

import type { Property_property } from './__generated__/Property_property.graphql';
import type { PropertyUpsertMutation } from './__generated__/PropertyUpsertMutation.graphql';
import type { propertyQuery } from './__generated__/propertyQuery.graphql.js';

import { createRelayEnvironment } from '../../controls/relay/createRelayEnvironment';

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


export const CreateProperty = (props: Props) => {
  return (
    <>
          <Flex justifyContent="center">
            <Paper
              css={{ maxWidth: 960, marginTop: 16, width: '100%', padding: 16 }}
            >
            <Link href={{ pathname: '/property' }}>
              <Button to="/property" color="primary" variant="contained">
                Back To List
              </Button>
            </Link>
                  <>
                    <Typography variant="h6">
                    <form autoComplete="off">
                    <Grid container spacing={24}>
                      <Grid item xs={12}>
                        
                        <TextField
                      id="outlined-uncontrolled"
                      label="Living surface"
                      placeholder="Enter living surface"
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                    style={{marginLeft:30}}
                      id="outlined-uncontrolled"
                      label="Land surface"
                      placeholder="Enter land surface"
                      margin="normal"
                      variant="outlined"
                    />
                        
                      </Grid>
                      <Grid item xs={12}>
                        
                        <TextField
                      id="outlined-uncontrolled"
                      label="Number of rooms"
                      placeholder="Enter number of rooms"
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                    style={{marginLeft:30}}
                      id="outlined-uncontrolled"
                      label="Number of parkings"
                      placeholder="Enter Number of parkings"
                      margin="normal"
                      variant="outlined"
                    />
                      </Grid>
                    </Grid>
                  </form> 
                  <Button style={{marginLeft:60, left:750}} color="primary" variant="contained">
                    Submit
                  </Button>
                    </Typography>
                  </>
            </Paper>
          </Flex>
    </>
  );
};
