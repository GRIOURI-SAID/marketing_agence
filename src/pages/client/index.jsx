import React from 'react'
import Layout from '../../layout/Layout'
import ClientList from './ClientList'
import Hero from './Hero'

function Client() {
    return (
        <Layout>
            <Hero />
            <ClientList />
        </Layout>
        
    )
}

export default Client