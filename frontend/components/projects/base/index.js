import React, { Component, Fragment } from 'react'
import { graphql, withApollo, Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Card, Col, Row, Icon, Button, Table } from 'antd'
import Link from 'next/link'

const fetchProjectsQuery = gql`
  query {
    project {
      id
      name
    }
  }
`

const deleteProjectMutation = gql`
  mutation($id: uuid!) {
    delete_project(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`

class ProjectsIndex extends Component {
  columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '90%',
      render: (text, record) => (
        <Link
          href={`/projects/show?id=${record.id}`}
          as={`/projects/${record.id}`}
        >
          <a>{record.name}</a>
        </Link>
      ),
    },
    {
      key: 'actions',
      width: '10%',
      render: (text, record) => (
        <Button
          type="danger"
          icon="delete"
          onClick={async () => {
            await this.props.client.mutate({
              mutation: deleteProjectMutation,
              variables: { id: record.id },
            })

            await this.props.client.query({
              query: fetchProjectsQuery,
              fetchPolicy: 'network-only',
            })
          }}
        >
          Delete
        </Button>
      ),
    },
  ]

  render() {
    return (
      <Query query={fetchProjectsQuery} fetchPolicy="network-only">
        {({ data, error, loading }) => {
          if (loading)
            return (
              <p className="flex justify-center items-center min-h-screen">
                Loading...
              </p>
            )

          if (error) return <p>Error: {error.message}</p>

          const { project } = data

          return (
            <Fragment>
              <div className="flex flex-row-reverse">
                <Link href={`/projects/new`} as={`/projects/new`}>
                  <Button type="primary" icon="plus-circle" size="large">
                    New Project
                  </Button>
                </Link>
              </div>
              <div className="mt-8">
                <Table
                  bordered
                  dataSource={project}
                  columns={this.columns}
                  rowKey="id"
                />
              </div>
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export default withApollo(ProjectsIndex)
