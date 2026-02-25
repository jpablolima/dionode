pipeline {
    agent {
        label  'nodedio'
    }
    stages {
        stage ("build") {
            steps{
                echo   "building the application..."
                sh '/home/pablo/.nvm/versions/node/v20.17.0/bin/node -v'
                sh  "ls  -la"
                //  sh '/home/pablo/.nvm/versions/node/v20.17.0/bin/node src/main.js'
            }
    }
        stage("test") {
            steps{
                echo  "testing the application..."
            }

        }
        stage("Build Image...") {
            steps{
                echo   "Criando imagem Docker do projeto..."
                sh  "docker build -t corrida-node ."
                sh  "docker images"
            }
        }
        stage("Criando container e teste de execução...") {
            steps {
                sh  "docker run --rm corrida-node"

            }
        }
        stage("deploy") {
            steps {
                echo  "deplying the application..."
            }
        }
    }
}