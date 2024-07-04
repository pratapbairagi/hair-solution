

export const onClick_toggle_handler = ({id, values, setActiveDetails, activeDetails}) => {

    const active_prod_serv_card_details = document.getElementById(id);
    const paraActive = document.getElementById(id+"p")
    const toggleBtn = document.getElementById(`${id}toggle_btn`)

    if(active_prod_serv_card_details.classList.contains("active_prod_serv_card_details")){

        active_prod_serv_card_details.classList.remove("active_prod_serv_card_details")
        paraActive?.classList.remove("active_prod_serv_card_details_para")
        toggleBtn?.classList.remove("closeBtn_active")
        setActiveDetails({})
    }
    else{

        active_prod_serv_card_details.classList.add("active_prod_serv_card_details")
        paraActive?.classList.add("active_prod_serv_card_details_para")
        toggleBtn?.classList.add("closeBtn_active")
        
        setActiveDetails(values)
    }
};
