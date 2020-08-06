import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView, LogBox, SafeAreaView } from 'react-native'
import { requestGetListSeafood } from '../../store/action/getListSeafood'
import { connect } from 'react-redux'
import FastImage from 'react-native-fast-image'
import Carousel from 'react-native-snap-carousel'

export class ListSeafood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listFoodFlatlist: '',
        };
    }

    async componentDidMount() {
        const { requestGetListSeafood } = this.props
        requestGetListSeafood()
    }

    UNSAFE_componentWillReceiveProps(props) {
        if (props.respGetListSeafoodOk != undefined) {
            this.setState({ listFoodFlatlist: props.respGetListSeafoodOk.meals })
        }
    }


    render() {
        const { listFoodFlatlist } = this.state
        const { navigation } = this.props
        LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
        LogBox.ignoreLogs(['Failed prop type'])
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <Carousel
                        ref={(ref) => { this._carousel = ref; }}
                        data={listFoodFlatlist}
                        autoplay={true}
                        renderItem={({ item }) => {
                            return (
                                <FastImage
                                    style={styles.imageCarousel}
                                    source={{
                                        uri: item.strMealThumb,
                                        priority: FastImage.priority.high,
                                    }}
                                    resizeMode={FastImage.resizeMode.cover}
                                />
                            )
                        }
                        }
                        loop={true}
                        sliderWidth={450}
                        itemWidth={450}
                    />
                    <View style={styles.gap} />
                    <Text style={styles.textSeafood}>Seafood</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={listFoodFlatlist}
                        numColumns={2}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.itemContainer}
                                    onPress={() => navigation.navigate('DetailSeafood', { idMeal: item.idMeal })}>
                                    <FastImage
                                        style={styles.image}
                                        source={{
                                            uri: item.strMealThumb,
                                            priority: FastImage.priority.high,
                                        }}
                                        resizeMode={FastImage.resizeMode.cover}
                                    />
                                    <Text style={styles.mealName}>{item.strMeal}</Text>
                                </TouchableOpacity>
                            )
                        }
                        }
                        keyExtractor={item => item.idMeal}
                    />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({
    respGetListSeafoodOk: state.getListSeafood.respGetListSeafoodOk,
});

const mapDispatchToProps = dispatch => ({
    requestGetListSeafood: () => dispatch(requestGetListSeafood()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListSeafood);

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    imageCarousel: {
        height: 200,
        elevation: 4,
    },
    itemContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        width: '42.5%',
        flexDirection: 'column',
        margin: '3.75%',
        elevation: 4,
        borderRadius: 15,
    },
    image: {
        width: '100%',
        height: 90,
        elevation: 4,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    mealName: {
        textAlign: 'center',
        marginHorizontal: 10,
        padding: 10,
    },
    gap: {
        height: 30
    },
    textSeafood:{
        fontSize: 24,
        fontWeight : 'bold',
        marginLeft : '3.75%'
    }
})