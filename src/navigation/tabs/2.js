import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'
 
const tabLabel = 'Category'
const imageTint = require('../../assets/images/ic_category_active.png')
const image = require('../../assets/images/ic_category.png')
const imageStyle = { width: 24, height: 24 }

import CategoryScreen from '../../views/category/home' 
import CategoryProductsScreen from '../../views/category/category-products'
import ProductScreenInCategoryScreen from '../../views/product/home'
import SearchScreen from '../../views/search/home'

const Category = createStackNavigator({
    CategoryScreen,
    CategoryProductsScreen
})

const CategoryStack = createStackNavigator(
    {
        Category,
        ProductScreenInCategoryScreen,
        SearchScreen,
    },
    {
        headerMode: 'none',
        mode: 'modal',
        cardStyle: {
            backgroundColor: "transparent",
            opacity: 0.99,
        },
        tabBarOptions: {
            tabBarVisible: true
        }
    }
)


export default {
    screen: CategoryStack,
    navigationOptions: {
        tabBarLabel: tabLabel,
        tabBarIcon: ({ focused }) => (
            <Image resizeMode={'contain'} style={imageStyle} source={focused ? imageTint : image} />
        )
    }
}