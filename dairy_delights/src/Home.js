import Banner from "./Banner";
import Categories from "./Categories";
import List from "./List";

export default function Home({data ,onCategorySelect,selectedCategories}){
    return (
        <div>
            <Categories onCategorySelect={onCategorySelect} selectedCategories={selectedCategories}/>
            <Banner/>
            <List products={data}/>
        </div>
    )
}