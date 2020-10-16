pipeline {
    agent any

    environment {
        JAVA_HOME = '/usr/lib/jvm/java'
    }

    stages {
        stage('Build') {
            steps {
                sh 'mvn compile'
            }
        }
        stage('Test') {
            steps {
                wrap([$class: 'Xvfb', debug: true, displayName: 32]){
                    sh 'mvn test'
                }
            }
        }
        stage('Publish') {
            steps {
                step([$class: 'Publisher', fileIncludePattern: '**/index.html'])
            }
        }
        stage('Post') {
            steps {
                echo 'Tests Finished'
            }
        }
    }
}
