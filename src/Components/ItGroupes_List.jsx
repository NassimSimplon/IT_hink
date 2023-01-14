import React from 'react'
import terminal from '../assets/terminal.svg'
import { getAllGroupes, getAllPosts } from "../Utils/Actions"
import useQueriesHook from "../Hooks/useQueriesHook"
 
const ItGroupes_List = () => {
  const { isLoading, fetchNextPage, data, hasNextPage, isError, error, isFetching } = useQueriesHook('ItGroupes', getAllGroupes)

  if (isLoading || isFetching) {
    return <div>... loading </div>
  }

  if (isError) {
    return <div>{error?.message}</div>
  }

  return (

    <div className='ItGroupes_List' key="Groupe_box_parent">
      <div key="Groupe_box_content_parent">
        <div className='head' key="Groupe_box_content_head">
          <h3 key="Groupe_box_h3">IT Groupes</h3>
          <img src={terminal} alt="" />
        </div>
        {data?.pages[0]?.data?.map((el) => (
          <div className='place' key={el?.id}>
            <img key="Groupe_box_card_Img" src={el?.image} alt="" />
            <div key="Groupe_box_card_content">
              <h4 key="Groupe_box_card_h4">{el?.name}</h4>
              <span key="Groupe_box_card_span">{el?.category}</span> <br />
              <button className='in' key="Groupe_box_card_btn">Visit Now</button>
            </div>
          </div>
        ))}
        <h6>Created By <span>NassimKhlifi</span> © 2023</h6>

      </div>
    </div>
  )
}

export default ItGroupes_List