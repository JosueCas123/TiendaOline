import { createContext, useEffect, useState } from "react";
import { Products } from "../interface/products";

interface ShoppingState {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>;
    isProductDetail: boolean,
    productToShow: Products | undefined,
    setProductToShow:React.Dispatch<React.SetStateAction<Products | undefined>>;
    carProducts: Products[],
    setCarProducts: React.Dispatch<React.SetStateAction<Products[]>>;
    isCheckouSideMenu:boolean,
    setIsCheckouSideMenu:React.Dispatch<React.SetStateAction<boolean>>;
    orden:any,
    setOrden:any,
    items: Products[],
    setItems:React.Dispatch<React.SetStateAction<Products[]>>;
    searchByTitle:string | undefined,
    setSearchByTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
    filteredItems:Products[] | undefined,
    setfilteredItems:React.Dispatch<React.SetStateAction<Products[]| undefined>>;
    searchByCategory:string | undefined,
    setSearchByCategory:React.Dispatch<React.SetStateAction<string| undefined>>;
    openProductDetail: () => void; 
    closeProductDetail: () => void;
    openCheckouSideMenu: () => void; 
    closeCheckouSideMenu: () => void; 
    // setIsProductDetail: React.Dispatch<React.SetStateAction<boolean>>;
}



export const ShppoingCarContext = createContext<ShoppingState>({}as ShoppingState);

export const ShoppingCarProvider = ({children}:any) => {
    //Shopping cart Incremet quantity
    const [count, setCount] = useState(0)

    //Produc detail open/close
    const [isProductDetail, setIsProductDetail] = useState(false)
    const openProductDetail = () => setIsProductDetail(true)
    const closeProductDetail = () => setIsProductDetail(false)

    //Checkout Side menu Open product open/close
    const [isCheckouSideMenu, setIsCheckouSideMenu] = useState(false)
    const openCheckouSideMenu = () => setIsCheckouSideMenu(true)
    const closeCheckouSideMenu = () => setIsCheckouSideMenu(false)

    // Producto Detail Show product
    const [productToShow, setProductToShow] = useState<Products| undefined>();

    // shopping cart Add productos car
    const [carProducts, setCarProducts] = useState<Products[]>([])

    // ordernes de shopping
    const [orden, setOrden] = useState([])

    //items Products
    const [items, setItems] = useState<Products[]>([])
    const [filteredItems, setfilteredItems] = useState<Products[]>()
    

    //search
    const [searchByTitle, setSearchByTitle] = useState<string| undefined>()
    console.log('searchTitle', searchByTitle)

     // Get products by category
    const [searchByCategory, setSearchByCategory] = useState<string|undefined>()
    //funcion para filtrar

    const filteredItemsByTitle = (items:Products[], searchByTitle:string):Products[] => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLocaleLowerCase()))
    }

    const filteredItemsByCategory = (items:Products[], searchByCategory:string) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }


    useEffect(() => {
        console.log('me ejecute')
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(respuesta => respuesta.json())
            .then(resultado => setItems(resultado))
            .catch(error => console.log(error))
    }, [])

    const filterBy = (searchType:string | null , items:Products[], searchByTitle:any, searchByCategory:any) => {
        if (searchType === 'BY_TITLE') {
          return filteredItemsByTitle(items, searchByTitle)
        }
    
        if (searchType === 'BY_CATEGORY') {
          return filteredItemsByCategory(items, searchByCategory)
        }
    
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
          return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
    
        if (!searchType) {
      return items
    }
  }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setfilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setfilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setfilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setfilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])

    console.log('filteritems', filteredItems)
    console.log('category', searchByCategory)

    return(
        <ShppoingCarContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetail,
            productToShow,
            setProductToShow,
            carProducts,
            setCarProducts,
            isCheckouSideMenu,
            setIsCheckouSideMenu,
            openCheckouSideMenu,
            closeCheckouSideMenu,
            orden,
            setOrden,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setfilteredItems,
            searchByCategory,
            setSearchByCategory
            
        }}>
            {children}
        </ShppoingCarContext.Provider>
    )
}