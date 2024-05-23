//GET /api/properties/search

import connectDB from "@/config/database"
import Property from "@/models/Property";

export const GET = async (req) => {
    try{
        await connectDB();
        
        const {searchParams} = new URL(req.url);
        const location = searchParams.get('location');
        const propertyType = searchParams.get('propertyType');

        const locationPattern = new RegExp(location, 'i');

        //match locationpattern against db fields
        let query = {
            $or: [
                {name: locationPattern},
                {description: locationPattern},
                {'location.street':locationPattern},
                {'location.city':locationPattern},
                {'location.state':locationPattern},
                {'location.zipcode':locationPattern},
            ]
        }

        //only check for property if it is not all
        if(propertyType && propertyType !== 'All'){
            const typePattern = new RegExp(propertyType, 'i');
            query.type = typePattern;
        }

        const properties = await Property.find(query);

        return new Response(JSON.stringify(properties), {status: 200})
    } catch (error){
        console.log(error);
        return new Response("Something went wrong", {status: 500});

    }
}