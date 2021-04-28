import Card from 'components/card'
import CardContainer from 'components/card_container'
import Code from 'components/code'
import Container from 'components/container'
import Description from 'components/description'
import Footer from 'components/footer'
import Grid from 'components/grid'
import Logo from 'components/logo'
import Main from 'components/main'
import Title from 'components/title'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import useFetch from 'use-http'

export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}


export default function JSONPlaceholderPage() {
    const [posts, setPosts] = useState<IPost[]>([])
    const { get, response, loading, error } = useFetch<IPost[]>('https://jsonplaceholder.typicode.com/posts')

    useEffect(() => { loadInitialPosts() }, [])

    async function loadInitialPosts() {
        const initialPosts = await get()
        if (response.ok) setPosts(initialPosts)
    }

    return (
        <Container>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Main>
                <Title>
                    json placeholder posts
                </Title>

                <Description>
                    Get started by editing{' '}
                    <Code>pages/index.js</Code>
                </Description>

                <Grid>
                    {loading && 'Loading...'}
                    <CardContainer height="500px">
                        {posts.map(post => {

                            return (
                                <Card key={post.id}>
                                    <h2>{post.title}</h2>
                                    <p>{post.body}</p>
                                </Card>
                            )
                        })}
                    </CardContainer>
                </Grid>
            </Main>

            <Footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <Logo>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </Logo>
                </a>
            </Footer>
        </Container >
    )
}
