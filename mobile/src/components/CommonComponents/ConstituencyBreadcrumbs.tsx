import React from 'react'
import { Box, Breadcrumbs, Link, Typography, makeStyles } from '@material-ui/core'
import { NavigateNext } from '@material-ui/icons'
import {  } from 'react-router-dom'
import Navigation from '../Navigation'

type Props = {
  county: string,
  constituency: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(1.5),
  }
}))

const SingleLink = ({link}: {
  link: string
}) => (
  <Link href={`/regional/${link}`}>
    <Typography variant="h4" color="textSecondary">
      {link}
    </Typography>
  </Link>
)

const ConstituencyBreadcrumbs = ({
  county, constituency
}: Props) => {
  const classes = useStyles()
  return (
    <Breadcrumbs 
      separator={<NavigateNext fontSize="small" />}
      className={classes.root}
    >
      <SingleLink link={county} />
      <SingleLink link={constituency} />
    </Breadcrumbs>
  )
}

export default ConstituencyBreadcrumbs