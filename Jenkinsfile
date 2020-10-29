pipeline{
    agent any
    triggers {
        // cron ('H/3 * * * *')
        githubPush()
    }
    // tools {}
    // options {}
    stages{
        stage("echo"){
            steps{
                echo "check from triggering"
            }
        }
    }
}