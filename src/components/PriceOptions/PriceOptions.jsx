import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const PriceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to cardio machines",
                "Access to weightlifting area",
                "Locker usage",
                "Free WiFi",
                "Discounts on gym merchandise"
            ],
            "price": 30.00
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "features": [
                "Access to all facilities",
                "Group fitness classes included",
                "Personal training sessions (2/month)",
                "Sauna access",
                "Towel service"
            ],
            "price": 50.00
        },
        {
            "id": 3,
            "name": "Gold Membership",
            "features": [
                "Access to all facilities",
                "Unlimited group fitness classes",
                "Unlimited personal training sessions",
                "Nutritional counseling",
                "Priority booking for classes/events"
            ],
            "price": 80.00
        },
    ]
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-5">
                {
                    PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;