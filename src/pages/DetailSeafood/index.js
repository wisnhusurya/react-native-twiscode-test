import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView, LogBox, SafeAreaView, ImageBackground, Image } from 'react-native'
import { requestGetDetailFood } from '../../store/action/getDetailFood'
import { connect } from 'react-redux'
import FastImage from 'react-native-fast-image'
import Carousel from 'react-native-snap-carousel'
import { IconBack } from '../../assets'

export class DetailSeafood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idMeal: '',
            detailMeal: ''
        };
    }

    async componentDidMount() {
        const { idMeal } = this.props.route.params;
        const { requestGetDetailFood } = this.props
        this.setState({ idMeal })
        requestGetDetailFood(idMeal)
    }

    UNSAFE_componentWillReceiveProps(props) {
        if (props.respGetDetailFoodOk != undefined) {
            this.setState({ detailMeal: props.respGetDetailFoodOk.meals[0] })
        }
    }


    render() {
        const { navigation } = this.props
        return (
            <ScrollView>
                <ImageBackground
                    style={styles.image}
                    source={{
                        uri: this.state.detailMeal.strMealThumb,
                    }}
                >
                    <TouchableOpacity style={styles.bgIconBack} onPress={()=> navigation.navigate('ListSeafood')}>
                        <Image source={IconBack} style={styles.iconBack} />
                    </TouchableOpacity>
                </ImageBackground>
                <Text style={styles.textMeal}>{this.state.detailMeal.strMeal}</Text>
                <Text style={styles.textCategory}>{this.state.detailMeal.strCategory}</Text>
                <Text style={styles.textInstruction}>Instruction : </Text>
                <Text style={styles.textInstruction}>{this.state.detailMeal.strInstructions}</Text>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    respGetDetailFoodOk: state.getDetailFood.respGetDetailFoodOk,
});

const mapDispatchToProps = dispatch => ({
    requestGetDetailFood: (id_food) => dispatch(requestGetDetailFood(id_food)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DetailSeafood);

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 250,
        elevation: 4,
    },
    textMeal: {
        marginHorizontal: '3.75%',
        marginTop: '3.75%',
        fontSize: 20,
        fontWeight: 'bold',
    },
    textCategory: {
        marginHorizontal: '3.75%',
        color: '#a9a9a9'
    },
    textInstruction: {
        marginHorizontal: '3.75%',
    },
    iconBack: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        margin: 10
    },
    bgIconBack:{
        width: 50,
        height: 50,
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
        borderRadius: 50/2,
        margin: 15,
    }
})