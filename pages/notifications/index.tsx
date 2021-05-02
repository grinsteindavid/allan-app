import AdminLayout from 'components/layouts/admin'
import Head from 'next/head'
import { Button, Grid, Header, Label } from 'semantic-ui-react'

export default function Page() {

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <AdminLayout>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={8} textAlign="left">
                            <Label
                                content="Centro de notificaciones"
                            />
                        </Grid.Column>
                        <Grid.Column width={8} textAlign="right">
                            <Button
                                color="green"
                                content="Nueva notificacion"
                            />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={9} textAlign="left">
                            <Header
                                color="grey"
                                content="Enviar notificacion"
                            />
                        </Grid.Column>
                        <Grid.Column width={7} textAlign="left">
                            <Header
                                color="grey"
                                content="Vista previa"
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </AdminLayout>
        </>
    )
}
