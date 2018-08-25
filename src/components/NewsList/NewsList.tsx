import * as React from 'react'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'

import { News } from '../../models/news.model'

interface Props {
  items: News[]
  openNews: (news: News) => void
}

export default (props: Props) => (
  <GridList cellHeight={280}>
    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
      <ListSubheader component="div">News</ListSubheader>
    </GridListTile>
    {props.items.map(item => (
      <GridListTile
        key={item.title}
        onClick={() => props.openNews(item)}
        style={{ cursor: 'pointer' }}
      >
        <img src={item.urlToImage || ''} alt={item.title} />
        <GridListTileBar title={item.title} />
      </GridListTile>
    ))}
  </GridList>
)
