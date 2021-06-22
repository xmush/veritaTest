import express from "express";
import axios from "axios";

const host = '127.0.0.1'
const port = '3000'

const app = express();


// recursive to manipulate dinamic array
const mapArray = (dataArray, result = []) => {
    dataArray.map((data, index) => {
        if(typeof(dataArray[index][0]) == "object") {
            mapArray(dataArray[index], result)
        } else {
            result.push(''+data[1]+', '+data[0])
        }        
    })

    return result

}

// get dara from cloun and just take the array data
const getJsonDataToArray = async () => {
    const response = await axios.get('https://mocki.io/v1/8e889d1f-77cc-4838-9caf-97d3a421b95c')

    const dataFeature = response.data.features //get array of feature

    const coordinatesArray = dataFeature.map((feature) => {
        return feature.geometry.coordinates
        .map((coordinate) => {
            return coordinate
        })

    })

    return coordinatesArray
}

// test server
app.get('/', (req, res) => {
    res.json("Hi sholeh!")
})

// generate out 1
app.get("/out1", async (req, res) => {

    try {
        
        const arrayData = await getJsonDataToArray()

        const result = mapArray(arrayData)

        res.json({geometry_locs : result});
        
    } catch (error) {
        return error.message
    }

});

// generate out 2
app.get("/out2", async (req, res) => {

    try {
        
        const arrayData = await getJsonDataToArray()

        const result = {} 
        
        arrayData.map((element, index) => {
            const key = "geometry_locs_#"+(index + 1)
            result[key] = mapArray(element)
        })

        res.json(result);
        
    } catch (error) {
        return error.message
    }

});

// generate out 3
app.get("/out3", async (req, res) => {

    try {
        
        const arrayData = await getJsonDataToArray()

        const result = [] 
        
        arrayData.map((element) => {
            result.push(mapArray(element))
        })

        res.json({geometry_locs : result});
        
    } catch (error) {
        return error.message
    }

});

// running server on port
app.listen(port, () => {

    console.log(`Server is running on http://${host}:${port}`);


});