import React from "react";
import { useState, useEffect, useRef } from "react";
import ImageCard from "../../components/imageCard/imageCard";
import './home.css'
import Loader from "../../components/loader/loader";
import SearchCard from "../../components/searchCard/searchCard";




const Home = () => {
    const [imageList, setImageList] = useState(null)
    const [category, setCategory] = useState('nature')

    useEffect(()=> {
        // Fetch Image data
        getImage()
              

    }, [category])
    
    const getImage =  () => {
        fetch(`https://api.pexels.com/v1/search?query=${category}&per_page=80&page=1`, {
            headers: {
              Authorization: 'CVXUZC8BDLWrIWzBlWAkBmDAC8UFNju5pZqlc11SrGnfarpYsSyWBwi3'
            }
          })
          .then(response => response.json())
          .then(data => setImageList(data.photos))
          .catch(error => console.log('Error:', error));

        }


        // Save ref for dragItem and dragOverItem
        let dragItem = useRef(null)
        let dragOverItem = useRef(null)

        // Handle sorting
        const handleSort = () => {
            // duplicate the list to prevent mutating the original
            let _imageList = [...imageList]
            
            console.log(dragItem.current)
            console.log(dragOverItem.current)

            const draggedItemContent = _imageList.splice(dragItem.current, 1)[0]


            _imageList.splice(dragOverItem.current, 0, draggedItemContent)

            // Replacing the draged content with the final destination's content
            // const draggedOverContent = _imageList.splice(dragOverItem.current, 1)[0]


            // _imageList.splice(dragItem, 0, draggedOverContent)

            setImageList(_imageList)

           
            dragItem.current = null
            dragOverItem = null

            

            
        }

        // Fetch different image groups
        const fetchSports = () => {
            setCategory('sport')
        }

        const fetchNature = () => {
            setCategory('nature')
        }

        const fetchCars = () => {
            setCategory('car')
        }
      

        const fetchHouse = () => {
            setCategory('house')
        }

        const fetchFlags = () => {
            setCategory('africa flag')
        }

        const fetchFood = () => {
            setCategory('food')
        }

        const fetchDrinks = () => {
            setCategory('drink')
        }

        const fetchPhones = () => {
            setCategory('phone')
        }

        const fetchShoes = () => {
            setCategory('shoe')
        }

        const fetchBrands = () => {
            setCategory('brand')
        }

       // handle search section
       const [search, setSearch] = useState('')

       const handleSearch = (e) => {
        setSearch(e.target.value)
        filterData()
        
       }

       console.log(search)

       const [filtered, setFiltered ] = useState()
       var filteredArray = []


       const filterData = () => {
        imageList.forEach((image) => {
            if(image.photographer.toLowerCase().includes(search.toLowerCase()) ) {
               
                    filteredArray.push(image)
                
                
            }

            setFiltered(filteredArray)
            
        });
        console.log(filtered)
       }

       const [searchContent, setSearchContent] = useState(false)
       const onSubmit = () => {
        if(filtered){
            setSearchContent(true)
        }
       }


    return (
        <div className="home-page">
            
            <label className="search-container" style={{width: '80%'}}>
                <input
                    className="input"
                    placeholder="search by photographer name"
                    value={search}
                    onChange={handleSearch}
                 />
                 <button className="search-button" onClick={()=> {}}>Search</button>
            </label>
            {/* trying to make the search content appear */}
            {searchContent &&  <div className="grid-container">
                {
                    filtered.map((image, index)=> {
                        <div key={index} draggable 
                        onDragStart={(e)=> dragItem.current=index}
                        onDragEnter={(e)=> dragOverItem.current=index}
                        onDragEnd={handleSort}
                        onDragOver={(e)=> e.preventDefault()}
                        
                        >
                        
                        <SearchCard key={image.id} image = {image} />
                        
                    </div>
                    })
                }
            </div> }
               

            <div className="home-content"> 

            <div className="nav-bar">
                <ul>
                    <li className="--i:1" onClick={fetchNature}><a style={{zIndex: 5}} href="#">Nature</a> </li>
                    <li className="--i:1" onClick={fetchSports}><a style={{zIndex: 4}} href="#">Sports</a> </li>
                    <li className="--i:1" onClick={fetchCars}><a style={{zIndex: 3}} href="#">Cars</a> </li>
                    <li className="--i:1" onClick={fetchHouse}><a style={{zIndex: 2}} href="#">Houses</a> </li>
                    <li className="--i:1" onClick={fetchFlags}><a style={{zIndex: 1}} href="#">Flags</a> </li>
                    <li className="--i:1" onClick={fetchFood}><a style={{zIndex: 5}} href="#">Food</a> </li>
                    <li className="--i:1" onClick={fetchDrinks}><a style={{zIndex: 4}} href="#">Drinks</a> </li>
                    <li className="--i:1" onClick={fetchPhones}><a style={{zIndex: 3}} href="#">Phones</a> </li>
                    <li className="--i:1" onClick={fetchShoes}><a style={{zIndex: 2}} href="#">Shoes</a> </li>
                    <li className="--i:1" onClick={fetchBrands}><a style={{zIndex: 1}} href="#">Brands</a> </li>
                    
                </ul>

            </div>


            { !imageList? <Loader /> 
                :
                <div id="grid-container">
                {imageList?.slice(0, 15).map((image, index) => (
                    <div key={index} draggable 
                        onDragStart={(e)=> dragItem.current=index}
                        onDragEnter={(e)=> dragOverItem.current=index}
                        onDragEnd={handleSort}
                        onDragOver={(e)=> e.preventDefault()}
                        
                        >
                        
                        <ImageCard key={image.id} image = {image} />
                        
                    </div>
                ))
                }
            </div>
        
            }

            </div>
            

        </div>
        
    )
}



export default Home;