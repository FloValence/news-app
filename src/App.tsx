import * as React from 'react'

import {
  createStyles,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles'

import { fetcher } from './services/newsService'
import { News } from './models/news.model'
import NewsDescription from './components/NewsDescription/NewsDescription'
import NewsList from './components/NewsList/NewsList'

const styles = createStyles({
  app: {
    padding: '50px',
  },
  news: {
    height: '100%',
    position: 'fixed',
    right: 0,
    top: 0,
    width: '100%',
  },
})

interface Props extends WithStyles<typeof styles> {}

interface State {
  items: News[]
  selectedItem: News | null
}

class App extends React.Component<Props, State> {
  public state = {
    items: [],
    selectedItem: null
  }

  public reloadTimer: NodeJS.Timer

  public componentDidMount() {
    fetcher().then(items => this.setState({
      items
    }))

    this.reloadTimer = setInterval(() => 
      fetcher().then(items => this.setState({
        items
      })), 30000
    )
  }

  public componentWillUnmount() {
    clearInterval(this.reloadTimer)
  }

  public selectItem = (news: News) => {
    this.setState({
      selectedItem: news
    })
  }

  public removeItem = () => {
    this.setState({
      selectedItem: null
    })
  }

  public render() {
    const { items, selectedItem } = this.state
    const { classes } = this.props
    return (
      <div className={classes.app}>
        <NewsList openNews={this.selectItem} items={items} />
        {selectedItem && <NewsDescription className={classes.news} news={selectedItem} onClick={this.removeItem} />}
      </div>
    )
  }
}

export default withStyles(styles)(App)
