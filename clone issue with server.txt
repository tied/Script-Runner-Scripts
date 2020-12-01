import com.atlassian.jira.user.util.UserUtil
import com.atlassian.jira.ComponentManager
import com.atlassian.jira.component.ComponentAccessor
import com.atlassian.jira.issue.link.IssueLink
import com.atlassian.jira.util.ImportUtils
import com.atlassian.crowd.embedded.api.User;
import com.opensymphony.workflow.WorkflowContext
import org.apache.log4j.Category
 
 
log = Category.getInstance("com.onresolve.jira.groovy.CreateDependentIssue")
 
 
issueMgr = ComponentManager.getInstance().getIssueManager()
projectMgr = ComponentManager.getInstance().getProjectManager()
 
String currentUser = ((WorkflowContext) transientVars.get("context")).getCaller();
User currentUserObj = ComponentAccessor.getJiraAuthenticationContext().getLoggedInUser();
 
issueFactory = ComponentManager.getInstance().getIssueFactory()
newissue = issueFactory.getIssue()
newissue.setSummary (issue.summary)
newissue.setProject (issue.project)
newissue.setIssueTypeId("6") //6 == Story
newissue.description = issue.description
newissue.reporter = issue.getReporter()
newissue.assignee = issue.getAssignee()
 
params = ["issue":newissue]
subTask = issueMgr.createIssue(currentUserObj, params)
println subTask.get("key")
 
linkMgr = ComponentManager.getInstance().getIssueLinkManager()
linkMgr.createIssueLink (newissue.id, issue.id, Long.parseLong("10300"),Long.valueOf(1), currentUserObj)
