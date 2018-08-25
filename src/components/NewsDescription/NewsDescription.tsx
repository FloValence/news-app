import * as React from 'react'
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import {
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import './NewsDescription.css'

import { News } from '../../models/news.model'

const styles = createStyles({
  description: {
    padding: '5%',
  },
  layout: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
  },
})

interface Props extends WithStyles<typeof styles> {
  className: string
  news: News
  onClick: () => void
}

const NewsDescription = (props: Props) => (
  <ReactCSSTransitionGroup
    transitionName="newsDescription"
    transitionAppear={true}
    transitionAppearTimeout={300}
    transitionEnterTimeout={300}
    transitionLeave={true}
    transitionLeaveTimeout={300}
  >
    <div className={`${props.className} ${props.classes.layout}`} onClick={props.onClick}>
      <Typography variant="headline" className={props.classes.description}>{props.news.description}</Typography>
    </div>
  </ReactCSSTransitionGroup>
)

export default withStyles(styles)(NewsDescription)
