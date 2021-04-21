package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"strconv"
	"wdda-gql/graph/generated"
	"wdda-gql/graph/model"
)

func (r *mutationResolver) CreateAccount(ctx context.Context, input model.NewAccount) (*model.Account, error) {
	var targetUser *model.User
	for _, user := range r.users {
		if user.ID == input.UserID {
			targetUser = user
			break
		}
	}
	if targetUser == nil {
		return nil, fmt.Errorf("user with id='%s' not found", input.UserID)
	}
	newAccount := &model.Account{
		ID:     strconv.Itoa(r.lastTodoId),
		Name:   input.Name,
		Active: true,
		User:   targetUser,
	}

	r.accounts = append(r.accounts, newAccount)
	r.lastTodoId++
	return newAccount, nil
}

func (r *mutationResolver) CreateUser(ctx context.Context, input model.NewUser) (*model.User, error) {
	newUser := &model.User{
		ID:   strconv.Itoa(r.lastUserId),
		Name: input.Name,
	}
	r.users = append(r.users, newUser)
	r.lastUserId++
	r.usersChan <- newUser
	return newUser, nil
}

func (r *queryResolver) Users(ctx context.Context) ([]*model.User, error) {
	return r.users, nil
}

func (r *queryResolver) Accounts(ctx context.Context) ([]*model.Account, error) {
	return r.accounts, nil
}

func (r *subscriptionResolver) UserAdded(ctx context.Context) (<-chan *model.User, error) {
	return r.usersChan, nil
}

func (r *userResolver) Accounts(ctx context.Context, obj *model.User) ([]*model.Account, error) {
	userAccounts := make([]*model.Account, 0)
	for _, account := range r.accounts {
		if account.User.ID == obj.ID {
			userAccounts = append(userAccounts, account)
		}
	}

	return userAccounts, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

// Subscription returns generated.SubscriptionResolver implementation.
func (r *Resolver) Subscription() generated.SubscriptionResolver { return &subscriptionResolver{r} }

// User returns generated.UserResolver implementation.
func (r *Resolver) User() generated.UserResolver { return &userResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type subscriptionResolver struct{ *Resolver }
type userResolver struct{ *Resolver }
