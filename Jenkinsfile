pipeline{
    agent any
    trigger {
        cron ('H/3 * * * *')
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