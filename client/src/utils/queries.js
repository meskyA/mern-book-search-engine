// import { gql } from '@apollo/client';
import gql from "graphql-tag";
export const GET_ME = gql`
{
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            title
            authors
            description
            bookId
            image
            link

        }
    }
}`;