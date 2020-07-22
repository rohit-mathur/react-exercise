import React, { Component } from 'react';
import './App.css';
import menuData from './menu-data.json';
import MenuList from './components/menuList/menuList';
import ItemDetail from './components/itemDetail/itemDetail';
import { Switch, Route, RouteComponentProps, withRouter } from 'react-router-dom';


interface IAppState {
  menuData: any,
  selectedItem: object
}

interface IAppProps extends RouteComponentProps<any> {

}

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      menuData: menuData,
      selectedItem: {}
    }
  }

  selectItem = (itemId: number) => {
    this.setState({
      selectedItem: this.state.menuData[itemId]
    }, () => {
      return this.props.history.push(`/details/${itemId}`)
    })
  }

  onPriceUpdate = (itemId: number, price: number) => {
    this.setState({
      menuData: {
        ...this.state.menuData,
        [itemId]: {
          ...this.state.menuData[itemId],
          price
        }
      },
      selectedItem: {
        ...this.state.selectedItem,
        price
      }
    })
  }

  isValid = (available: string) => {
    return available.toLowerCase() === 'yes' || available.toLowerCase() === 'y' || available.toLowerCase() === 'no' || available.toLowerCase() === 'n'
  }

  updateBool = (available: string) => {
    if (available.toLowerCase() === 'yes' || available.toLowerCase() === 'y') {
      return true
    } else {
      return false
    }
  }

  updateAvailability = (itemId: number, available: string) => {
    if (this.isValid(available)) {
      this.setState({
        menuData: {
          ...this.state.menuData,
          [itemId]: {
            ...this.state.menuData[itemId],
            available: this.updateBool(available)
          }
        },
        selectedItem: {
          ...this.state.selectedItem,
          available: this.updateBool(available)
        }
      })
    } else {
      window.alert('Invalid Value')
    }

  }

  render() {
    console.log(this.state.menuData)
    return (
      <div className="container" data-testid="container">
        <Switch>
          <Route exact path="/" component={() => <MenuList menuData={this.state.menuData} selectItem={this.selectItem} />} />
          <Route path="/details/:itemId" component={() => <ItemDetail selectedItem={this.state.selectedItem} onPriceUpdate={this.onPriceUpdate}
            updateAvailability={this.updateAvailability} {...this.props} />} />
        </Switch>

      </div>
    );
  }
}

export default withRouter(App);
